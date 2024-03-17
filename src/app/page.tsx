'use client';
import BarChart from '@/components/BarChart';
import { Card, CardContent, CardProps } from '@/components/Card';
import SalesCard, { SalesCardProps } from '@/components/SalesCard';
import PageTitle from '@/components/PageTitle';
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col gap-5 w-full'>
      <PageTitle title='Dashboard' />
      <section className='grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4'>
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>
      <section className='grid grid-cols-1 gap-4 transition-all lg:grid-cols-2'>
        <CardContent className='flex justify-between gap-4'>
          <p className='p-4 font-semibold'>Overview</p>
          <BarChart />
        </CardContent>

        <CardContent>
          <p>Recent salves</p>
          <p className='textsm text-gray-400'>You made 265 sales this month.</p>
          {userSalesData.map((user, index) => (
            <SalesCard key={index} {...user} />
          ))}
        </CardContent>
      </section>
    </div>
  );
}

const cardData: CardProps[] = [
  {
    label: 'Total Revenue',
    amount: '$45,231.89',
    description: '+20.1% from last month',
    icon: DollarSign,
  },
  {
    label: 'Subscriptions',
    amount: '+2350',
    description: '+180.1% from last month',
    icon: Users,
  },
  {
    label: 'Sales',
    amount: '+12,234',
    description: '+19% from last month',
    icon: CreditCard,
  },
  {
    label: 'Active Now',
    amount: '+573',
    description: '+201 since last hour',
    icon: Activity,
  },
];

const userSalesData: SalesCardProps[] = [
  {
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    saleAmount: '+$1,999.00',
  },
  {
    name: 'Jackson Lee',
    email: 'isabella.nguyen@email.com',
    saleAmount: '+$1,999.00',
  },
  {
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    saleAmount: '+$39.00',
  },
  {
    name: 'William Kim',
    email: 'will@email.com',
    saleAmount: '+$299.00',
  },
  {
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    saleAmount: '+$39.00',
  },
];
