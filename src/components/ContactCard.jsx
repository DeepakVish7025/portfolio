import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ContactCard = () => {
  return (
    <div className=' py-4'>
      <Card className="w-full max-w-md bg-white dark:bg-black text-black dark:text-white p-4">
  <CardHeader>
    <CardTitle className="text-base sm:text-lg">Contact Info:</CardTitle>
  </CardHeader>

  <CardContent className="space-y-2 py-2  break-words text-sm sm:text-base">
    <div className="flex items-start gap-2">
      <i className="ri-mail-line text-xl" />
      <a href="mailto:anushkavishwakarma98980@gmail.com" className="hover:underline break-all truncate">
        anushkavishwakarma98980@gmail.com
      </a>
    </div>

    <div className="flex items-start gap-2">
      <i className="ri-phone-fill text-xl" />
      <a href="tel:+917800723614" className="hover:underline break-all truncate">
        +91 9151691310
      </a>
    </div>

    <div className="flex items-start gap-2">
      <i className="ri-map-pin-2-line text-xl" />
      <span>Jaunpur Up India</span>
    </div>

    <div className="flex items-start gap-2">
      <i className="ri-calendar-line text-xl" />
      <span>Available for Hire</span>
    </div>
  </CardContent>
</Card>

    </div>
  )
}

export default ContactCard
