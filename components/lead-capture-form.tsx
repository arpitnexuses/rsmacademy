"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button, buttonVariants } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(9, { message: "Valid phone number is required" }),
  company: z.string().min(2, { message: "Company name is required" }),
  position: z.string().min(2, { message: "Position is required" }),
  companySize: z.string(),
  trainingNeeds: z.string().optional(),
})

export default function LeadCaptureForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      position: "",
      companySize: "",
      trainingNeeds: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Assessment Request Submitted",
          description: "Thank you for your interest. An RSM consultant will contact you shortly.",
          className: "bg-green-50 border-green-200",
          style: {
            backgroundColor: '#f0fdf4',
            border: '1px solid #bbf7d0',
            marginTop: '1rem',
            marginRight: '1rem',
          },
          duration: 5000,
        })
        form.reset()
        setStep(1)
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description: "There was an error submitting your request. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = async () => {
    if (step < 3) {
      let isValid = false;
      if (step === 1) {
        isValid = await form.trigger(['fullName', 'email', 'phone']);
      } else if (step === 2) {
        isValid = await form.trigger(['company', 'position', 'companySize']);
      }
      
      if (isValid) {
        setStep(step + 1);
      }
    }
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-green-600">Request Your Free Assessment</h2>
      <Form {...form}>
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            if (step !== 3) {
              nextStep();
            } else {
              form.handleSubmit(onSubmit)(e);
            }
          }} 
          className="space-y-6"
        >
          {step === 1 && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} className="bg-white/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@company.com" {...field} className="bg-white/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+966 XX XXX XXXX" {...field} className="bg-white/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your company name" {...field} className="bg-white/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Position</FormLabel>
                    <FormControl>
                      <Input placeholder="Your job title" {...field} className="bg-white/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Company Size</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/50">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-50">1-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501-1000">501-1000 employees</SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="trainingNeeds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Primary Training Needs</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Briefly describe your organization's training needs or challenges"
                        className="resize-none bg-white/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button 
                type="button" 
                onClick={prevStep} 
                className="border border-input bg-background hover:bg-accent hover:text-accent-foreground text-gray-600"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
            )}
            {step < 3 ? (
              <Button type="button" onClick={nextStep} className="bg-green-600 hover:bg-green-700 text-white ml-auto">
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={(e) => form.handleSubmit(onSubmit)(e)}
                className="bg-green-600 hover:bg-green-700 text-white ml-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            )}
          </div>
        </form>
      </Form>
      <div className="flex justify-center mt-6">
        <span className="text-sm text-gray-500">Step {step} of 3</span>
      </div>
    </div>
  )
}

