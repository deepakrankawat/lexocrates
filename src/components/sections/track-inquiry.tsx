
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Loader } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';

export function TrackInquiry() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'submitted' | 'notFound'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      // Simulate an API call
      if (email.includes('no-record')) {
        setStatus('notFound');
      } else {
        setStatus('submitted');
      }
    }, 1500);
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
                {status === 'idle' || status === 'loading' ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-grow"
                    />
                    <Button type="submit" disabled={status === 'loading'}>
                      {status === 'loading' ? <Loader className="animate-spin mr-2" /> : null}
                      Track Status
                    </Button>
                  </form>
                ) : null}
                
                {status === 'submitted' && (
                  <div className="text-center p-6 bg-green-50 border border-green-200 rounded-md">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-bold text-green-800">Inquiry Received</h3>
                    <p className="text-green-700 mt-2">We have received your inquiry. Our team is reviewing it and will get back to you within 24 hours.</p>
                  </div>
                )}
                
                {status === 'notFound' && (
                   <div className="text-center p-6 bg-yellow-50 border border-yellow-200 rounded-md">
                    <Clock className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="font-bold text-yellow-800">No Record Found</h3>
                    <p className="text-yellow-700 mt-2">We couldn't find an inquiry associated with that email. Please check for typos or submit a new inquiry.</p>
                     <Button onClick={() => { setStatus('idle'); setEmail(''); }} className="mt-4">Try Again</Button>
                  </div>
                )}

              </CardContent>
            </Card>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
