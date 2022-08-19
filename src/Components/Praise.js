/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Blood Bank',
    description:
      'The Blood Bank is an integral part of LifeCare Hospital. We are dedicated togiving life to the community by providing life-saving blood components and transfusion services that give hope to people in need.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Medical Social Work (MSW)',
    description:
      'The MSW team is the link between the patient, the Hospital’s medical team, its administration and the community at large.',
    icon: ScaleIcon,
  },
  {
    name: 'Palliative Care',
    description:
      'We believe that palliative care is ‘Responsive Care’. It is care that is responsive to the needs of patients and their families.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Physiotherapy & Rehabilitation',
    description:
      'We strive to prevent complications, restore function and mobility, provide functional assessment long with advice and instructions for better health and activity levels.',
    icon: AnnotationIcon,
  },
]

export default function Praise() {
  return (
    <div class="py-12 bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Support System of Excellence
          </p>
          <p class="mt-4 max-w-2xl text-xl font-bold text-indigo-700 lg:mx-auto">
           We at LifeCare Hospital tend to provide services which can serve the patients and visitors with utmost care and support.
          </p>
        </div>

        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon class="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                </dt>
                <dd class="mt-2 ml-16 text-base font-semibold text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
