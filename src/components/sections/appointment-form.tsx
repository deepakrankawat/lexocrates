
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from "@/lib/utils";
import React from "react";

export function AppointmentForm() {
    const [date, setDate] = React.useState<Date>();
  return (
    <section id="appointment-form" className="py-20 sm:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline text-5xl font-bold text-primary mb-12">Let&apos;s Make An Appointment With Us First</h2>
        </div>
        <form className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <Label htmlFor="name">Your Name*</Label>
                    <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Your Email*</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <Label htmlFor="phone">Your Phone*</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="services">Services*</Label>
                    <Select>
                        <SelectTrigger id="services">
                            <SelectValue placeholder="Choose Services" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="business-law">Business Law</SelectItem>
                            <SelectItem value="education-law">Education Law</SelectItem>
                            <SelectItem value="legal-consultant">Legal Consultant</SelectItem>
                            <SelectItem value="general-lawyer">General Lawyer</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                <Label htmlFor="date">Date*</Label>
                <Popover>
                    <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                    </PopoverContent>
                </Popover>
                </div>
                <div className="space-y-2">
                <Label htmlFor="available-hours">Available Hours*</Label>
                <Select>
                    <SelectTrigger id="available-hours">
                    <SelectValue placeholder="Choose Time" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="9am-10am">09:00 - 10:00</SelectItem>
                    <SelectItem value="10am-11am">10:00 - 11:00</SelectItem>
                    <SelectItem value="11am-12pm">11:00 - 12:00</SelectItem>
                    <SelectItem value="1pm-2pm">13:00 - 14:00</SelectItem>
                    <SelectItem value="2pm-3pm">14:00 - 15:00</SelectItem>
                    </SelectContent>
                </Select>
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Message <span className="text-muted-foreground">(optional)</span></Label>
                <Textarea id="message" placeholder="Enter message" rows={6} />
            </div>
            <div className="text-center">
                <Button type="submit" size="lg">
                    Make Appointment
                </Button>
            </div>
        </form>
      </div>
    </section>
  );
}
