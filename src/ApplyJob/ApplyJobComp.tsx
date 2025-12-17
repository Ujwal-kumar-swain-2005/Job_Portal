import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Divider,
  Textarea,
  TextInput,
  NumberInput,
  FileInput,
  Button,
  Notification,
  rem,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

const ApplyJobComp = () => {
  const [mode, setMode] = useState<'fill' | 'preview'>('fill');
  const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();
    const[sec,setSec]=useState(5);
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    coverLetter: '',
    resume: null as File | null,
  });

  const handleChange =
    (field: keyof typeof formValues) =>
    (value: any) => {
      setFormValues((prev) => ({ ...prev, [field]: value }));
    };

  const handlePreview = (e: React.FormEvent) => {
    e.preventDefault();
    setMode('preview');
    setSubmitted(false);
  };

  const handleEdit = () => {
    setMode('fill');
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    let x = 5;
    setInterval(() => {
      x -= 1;
      if (x === 0) {
        navigate('/jobs');
      }
      setSec(x);    
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-mine-shaft-950 text-mine-shaft-100 flex justify-center px-4 py-8">
      <div className="w-full max-w-4xl bg-mine-shaft-900/80 border border-mine-shaft-800 rounded-2xl p-4 md:p-8 shadow-lg">
       
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex gap-4 items-center">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img
                className="h-14 w-14 object-contain"
                src="/Companies/Google.png"
                alt="Google"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div className="font-semibold text-xl md:text-2xl text-bright-sun-400">
                Software Engineer III
              </div>
              <div className="text-sm md:text-base text-mine-shaft-300">
                Google &bull; 3 days ago &bull; 48 Applicants
              </div>
            </div>
          </div>

          <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs text-mine-shaft-400">
            <span className="px-3 py-1 rounded-full bg-mine-shaft-800 text-bright-sun-300">
              Remote • Full-time
            </span>
            <span className="text-mine-shaft-400">Bangalore, India</span>
          </div>
        </div>

        <Divider my="xl" />

        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-mine-shaft-50 mb-1">
              {mode === 'fill' ? 'Submit your application' : 'Preview your application'}
            </h2>
            <p className="text-sm text-mine-shaft-400">
              {mode === 'fill'
                ? 'Fill in your details carefully. Recruiters will use this information to assess your fit.'
                : 'Check all details before submitting. You can go back and edit if needed.'}
            </p>
          </div>
          <div className="hidden sm:block text-xs uppercase tracking-wide text-mine-shaft-500">
            {mode === 'fill' ? 'Step 1: Fill form' : 'Step 2: Preview & submit'}
          </div>
        </div>
        <form
          className="space-y-6"
          onSubmit={mode === 'fill' ? handlePreview : handleSubmit}
        >
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <TextInput
              label="Full Name"
              placeholder="Enter your full name"
              withAsterisk
              value={formValues.fullName}
              onChange={(e) => handleChange('fullName')(e.currentTarget.value)}
            />
            <TextInput
              label="Email Address"
              placeholder="Enter your email address"
              withAsterisk
              value={formValues.email}
              onChange={(e) => handleChange('email')(e.currentTarget.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <NumberInput
              label="Phone Number"
              placeholder="Enter your phone number"
              hideControls
              withAsterisk
              value={formValues.phone}
              onChange={handleChange('phone')}
            />
            <NumberInput
              label="Experience (in years)"
              placeholder="Enter your experience"
              hideControls
              min={0}
              max={50}
              withAsterisk
              value={formValues.experience}
              onChange={handleChange('experience')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <TextInput
              label="Portfolio Website"
              placeholder="https://your-portfolio.com"
              value={formValues.portfolio}
              onChange={(e) => handleChange('portfolio')(e.currentTarget.value)}
            />
            <FileInput
              label="Upload Resume"
              placeholder={
                formValues.resume ? formValues.resume.name : 'Choose file'
              }
              withAsterisk
              value={formValues.resume}
              onChange={handleChange('resume')}
            />
          </div>

          <div>
            <Textarea
              label="Cover Letter"
              placeholder="Write a short cover letter highlighting your experience, achievements, and why you are a good fit."
              minRows={4}
              value={formValues.coverLetter}
              onChange={(e) =>
                handleChange('coverLetter')(e.currentTarget.value)
              }
            />
          </div>
          {mode === 'preview' && (
            <div className="mt-4 rounded-xl border border-mine-shaft-800 bg-mine-shaft-900/70 p-4 space-y-3 text-sm text-mine-shaft-200">
              <div className="font-semibold text-mine-shaft-50 mb-1">
                Preview
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <span className="text-mine-shaft-500">Name:</span>{' '}
                  {formValues.fullName || '-'}
                </div>
                <div>
                  <span className="text-mine-shaft-500">Email:</span>{' '}
                  {formValues.email || '-'}
                </div>
                <div>
                  <span className="text-mine-shaft-500">Phone:</span>{' '}
                  {formValues.phone || '-'}
                </div>
                <div>
                  <span className="text-mine-shaft-500">Experience:</span>{' '}
                  {formValues.experience
                    ? `${formValues.experience} years`
                    : '-'}
                </div>
                <div>
                  <span className="text-mine-shaft-500">Portfolio:</span>{' '}
                  {formValues.portfolio || '-'}
                </div>
                <div>
                  <span className="text-mine-shaft-500">Resume:</span>{' '}
                  {formValues.resume ? formValues.resume.name : '-'}
                </div>
              </div>
              <div>
                <div className="text-mine-shaft-500 mb-1">Cover Letter:</div>
                <div className="whitespace-pre-wrap text-mine-shaft-200">
                  {formValues.coverLetter || '-'}
                </div>
              </div>
            </div>
          )}

          {/* Notification after submit */}
          {submitted && (
            <Notification
              icon={
                <IconCheck style={{ width: rem(20), height: rem(20) }} />
              }
              color="teal"
              title="Application Submitted!"
              mt="md"
              withCloseButton={false}
            >
              Redirecting to Find Jobs in 5 seconds...
            </Notification>
          )}

          {/* Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-end">
            {mode === 'preview' && (
              <Button
                type="button"
                variant="outline"
                className="border-mine-shaft-600 text-mine-shaft-100 hover:bg-mine-shaft-800"
                onClick={handleEdit}
              >
                Edit
              </Button>
            )}

            <Button
              type="submit"
              size="md"
              className="w-full sm:w-auto bg-bright-sun-400 text-mine-shaft-900 hover:bg-bright-sun-300 font-semibold px-6"
            >
              {mode === 'fill' ? 'Preview' : 'Submit Application'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobComp;
