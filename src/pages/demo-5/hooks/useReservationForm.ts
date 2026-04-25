import { useState } from 'react'
import type { ReservationFormData } from '../types'

const initialFormData: ReservationFormData = {
  name: '',
  email: '',
  phone: '',
  guests: 2,
  date: '',
  time: '20:30',
  occasion: 'none',
  notes: '',
}

export function useReservationForm() {
  const [formData, setFormData] = useState<ReservationFormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({})

  const updateField = <K extends keyof ReservationFormData>(
    field: K,
    value: ReservationFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ReservationFormData, string>> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.date) newErrors.date = 'Date is required'
    if (!formData.time) newErrors.time = 'Time is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData(initialFormData)
  }

  const resetForm = () => {
    setIsSuccess(false)
    setFormData(initialFormData)
    setErrors({})
  }

  return { formData, updateField, handleSubmit, isSubmitting, isSuccess, errors, resetForm }
}
