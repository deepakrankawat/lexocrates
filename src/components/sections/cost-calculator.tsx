
'use client';

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, BarChart } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';

const US_UK_RATE = 350; // Example blended rate for US/UK
const INDIA_RATE = 50;  // Example rate for India LPO

export function CostCalculator() {
  const [hours, setHours] = useState(100);
  const usUkCost = hours * US_UK_RATE;
  const indiaCost = hours * INDIA_RATE;
  const savings = usUkCost - indiaCost;
  const savingsPercentage = Math.round((savings / usUkCost) * 100);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="bg-secondary py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SlideIn>
          <div className="text-center mb-12">
            <p className="font-lato font-bold text-accent uppercase tracking-wider">Cost Efficiency</p>
            <h2 className="mt-4 font-lato text-3xl md:text-4xl font-bold text-primary">
              Estimate Your Savings
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
              Use our interactive calculator to see how much you could save by outsourcing your legal process work to India.
            </p>
          </div>
        
          <Card className="max-w-4xl mx-auto bg-background p-6 md:p-8">
            <CardHeader className="text-center p-0 mb-8">
              <CardTitle className="font-roboto text-2xl font-medium text-primary">
                Monthly Billable Hours: <span className="font-bold text-accent">{hours}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Slider
                defaultValue={[hours]}
                max={1000}
                step={10}
                onValueChange={(value) => setHours(value[0])}
                className="mb-12"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <Card className="bg-secondary">
                  <CardHeader className="items-center pb-2">
                    <DollarSign className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg font-medium text-primary">US / UK Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-primary">{formatCurrency(usUkCost)}</p>
                    <p className="text-sm text-foreground/70">(@ {formatCurrency(US_UK_RATE)}/hr)</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary text-primary-foreground">
                  <CardHeader className="items-center pb-2">
                    <DollarSign className="h-8 w-8 text-accent" />
                    <CardTitle className="text-lg font-medium">Lexocrates Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">{formatCurrency(indiaCost)}</p>
                    <p className="text-sm text-primary-foreground/70">(@ {formatCurrency(INDIA_RATE)}/hr)</p>
                  </CardContent>
                </Card>
                <Card className="bg-accent text-accent-foreground">
                  <CardHeader className="items-center pb-2">
                    <BarChart className="h-8 w-8" />
                    <CardTitle className="text-lg font-medium">Potential Savings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">{savingsPercentage}%</p>
                    <p className="text-sm text-accent-foreground/80">({formatCurrency(savings)} saved)</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </SlideIn>
      </div>
    </section>
  );
}
