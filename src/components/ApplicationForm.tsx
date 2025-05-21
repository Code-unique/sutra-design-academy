
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import SectionTitle from './SectionTitle';
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generatePDF, sendPdfToWhatsApp } from '@/utils/pdfGenerator';

type FormStep = 1 | 2 | 3;

const ApplicationForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<FormStep>(1);
  const [submitting, setSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolioLink: '',
    statement: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        toast({
          title: "Required Fields",
          description: "Please fill out all required fields.",
          variant: "destructive"
        });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const prevStep = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Generate PDF from form data
      const pdfBlob = generatePDF(formData);
      
      // Send PDF to WhatsApp
      sendPdfToWhatsApp(pdfBlob, ['9804304000', '9862340551']);
      
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying. Your application has been sent and will be downloaded as PDF."
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        portfolioLink: '',
        statement: ''
      });
      setStep(1);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-sutra-cream mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="input-custom w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-sutra-cream mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="input-custom w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-sutra-cream mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="input-custom w-full"
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <Button onClick={nextStep} className="bg-sutra-cream text-sutra-dark hover:bg-sutra-cream-dark">
                Next Step
              </Button>
            </div>
          </>
        );
      
      case 2:
        return (
          <>
            <div className="space-y-4">
              <div>
                <label htmlFor="portfolioLink" className="block text-sm font-medium text-sutra-cream mb-1">
                  Portfolio Link (optional)
                </label>
                <input
                  id="portfolioLink"
                  name="portfolioLink"
                  type="url"
                  value={formData.portfolioLink}
                  onChange={handleInputChange}
                  placeholder="Enter your portfolio URL"
                  className="input-custom w-full"
                />
              </div>
              
              <div>
                <label htmlFor="statement" className="block text-sm font-medium text-sutra-cream mb-1">
                  Statement of Interest <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="statement"
                  name="statement"
                  value={formData.statement}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell us why you're interested in joining Sutra Design Academy"
                  className="input-custom w-full resize-none"
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button onClick={prevStep} variant="outline" className="border-sutra-cream text-sutra-cream hover:bg-sutra-cream hover:text-sutra-dark">
                Previous
              </Button>
              <Button onClick={nextStep} className="bg-sutra-cream text-sutra-dark hover:bg-sutra-cream-dark">
                Review Application
              </Button>
            </div>
          </>
        );
      
      case 3:
        return (
          <>
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-sm">
                <h4 className="font-serif text-lg mb-4">Review Your Information</h4>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-sutra-cream/70">Full Name</p>
                    <p className="text-sutra-cream">{formData.fullName}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-sutra-cream/70">Email</p>
                    <p className="text-sutra-cream">{formData.email}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-sutra-cream/70">Phone</p>
                    <p className="text-sutra-cream">{formData.phone}</p>
                  </div>
                  
                  {formData.portfolioLink && (
                    <div>
                      <p className="text-sm text-sutra-cream/70">Portfolio</p>
                      <p className="text-sutra-cream">{formData.portfolioLink}</p>
                    </div>
                  )}
                  
                  <div>
                    <p className="text-sm text-sutra-cream/70">Statement of Interest</p>
                    <p className="text-sutra-cream">{formData.statement}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button 
                onClick={prevStep} 
                variant="outline" 
                className="border-sutra-cream text-sutra-cream hover:bg-sutra-cream hover:text-sutra-dark"
                disabled={submitting}
              >
                Edit Information
              </Button>
              <Button 
                onClick={handleSubmit} 
                className="bg-sutra-cream text-sutra-dark hover:bg-sutra-cream-dark"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="apply" className="section bg-subtle-gradient">
      <div className="container-custom">
        <SectionTitle 
          title="Ready to Join?" 
          subtitle="Take the first step toward your fashion design journey"
          alignment="center"
        />
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-sutra-dark border-sutra-accent/20">
            <CardHeader className="border-b border-sutra-accent/10 pb-4">
              <div className="flex justify-between items-center">
                <h3 className="font-serif text-2xl text-sutra-cream">Application Form</h3>
                <div className="flex space-x-2">
                  <span className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-sutra-accent' : 'bg-sutra-accent/30'}`}></span>
                  <span className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-sutra-accent' : 'bg-sutra-accent/30'}`}></span>
                  <span className={`w-3 h-3 rounded-full ${step >= 3 ? 'bg-sutra-accent' : 'bg-sutra-accent/30'}`}></span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="py-6">
              <form>{renderStep()}</form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
