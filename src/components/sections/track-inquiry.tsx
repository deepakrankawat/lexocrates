
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Loader, AlertCircle } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';

type InquiryStatus = 'idle' | 'loading' | 'received' | 'resolved' | 'notFound';

export function TrackInquiry() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<InquiryStatus>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      // Simulate an API call with different email responses
      if (email.includes('resolved@example.com')) {
        setStatus('resolved');
      } else if (email.includes('pending@example.com')) {
        setStatus('received');
      } else {
        setStatus('notFound');
      }
    }, 1500);
  };

  const renderStatus = () => {
    switch (status) {
      case 'resolved':
        return (
          <div className="text-center p-6 bg-green-50 border border-green-200 rounded-md">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="font-bold text-green-800">Inquiry Resolved</h3>
            <p className="text-green-700 mt-2">Your inquiry has been resolved. If you have further questions, please feel free to contact us again.</p>
            <Button onClick={() => { setStatus('idle'); setEmail(''); }} className="mt-4">Track Another Inquiry</Button>
          </div>
        );
      case 'received':
        return (
          <div className="text-center p-6 bg-blue-50 border border-blue-200 rounded-md">
            <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="font-bold text-blue-800">Inquiry Received</h3>
            <p className="text-blue-700 mt-2">We have received your inquiry. Our team is reviewing it and will get back to you within 24 hours.</p>
            <Button onClick={() => { setStatus('idle'); setEmail(''); }} className="mt-4">Track Another Inquiry</Button>
          </div>
        );
      case 'notFound':
        return (
          <div className="text-center p-6 bg-yellow-50 border border-yellow-200 rounded-md">
            <AlertCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-bold text-yellow-800">No Record Found</h3>
            <p className="text-yellow-700 mt-2">We couldn't find an inquiry associated with that email. Please check for typos or submit a new inquiry.</p>
            <Button onClick={() => { setStatus('idle'); setEmail(''); }} className="mt-4">Try Again</Button>
          </div>
        );
      case 'idle':
      case 'loading':
      default:
        return (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="e.g., pending@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto">
              {status === 'loading' ? <Loader className="animate-spin mr-2" /> : null}
              {status === 'loading' ? 'Checking...' : 'Track Status'}
            </Button>
          </form>
        );
    }
  };

  return (
    <section id="track-inquiry" className="bg-secondary py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SlideIn>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl md:text-4xl font-bold text-primary">Track Your Inquiry</CardTitle>
                <p className="text-foreground/80 pt-2">Enter your email to check the status of your submission.</p>
              </CardHeader>
              <CardContent>
                {renderStatus()}
              </CardContent>
            </Card>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
