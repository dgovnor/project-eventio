import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Title, Subtitle } from '../../ui-kit/components/Typography'
import { Input } from '../../ui-kit/components/Input'
import { format } from 'date-fns'
import { StyledButton } from './styled'
import { COLOR, SIZES } from '../../enums/constants'


type FormData = {
  title: string,
  description: string,
  date: string,
  time: string,
  capacity: number
}

/**
 * Form for creating new / editing event
 */
export const EventForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false)

  const getTodayDate = format(new Date(), 'DD MMM YYYY')

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    console.log(data)
    // try {
    //   const event = await createEvent({
    //     title: data.title,
    //     description: data.description,
    //     startsAt: createDateFormat(data.date, data.time),
    //     capacity: data.capacity,
    //   })

    //   if (event) {
    //     onCreateEvent(event)
    //   }

    // } catch {
    // } finally {
    //   setLoading(false)
    // }
  }

  return (
    <>
      <Title>Create new event</Title>
      <Subtitle>Enter detail below.</Subtitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          id="name"
          placeholder="Title"
          {...register('title', { required: true })}
          hasError={errors.title}
          errorMsg="Title cannot be empty"
        />


        <Input
          type="text"
          id="desc"
          placeholder="Description"
          {...register('description', { required: true })}
          hasError={errors.description}
          errorMsg="Description cannot be empty"
        />

        
            <Input
              type="date"
              id="date"
              min={getTodayDate}
              placeholder="Date"
              {...register('date',{ required: true })}
              hasError={errors.date}
              errorMsg="Date cannot be empty"
            />

            <Input
              type="time"
              id="time"
              placeholder="Time"
              {...register('time',{ required: true })}
              hasError={errors.time}
              errorMsg="Time cannot be empty"
            />

        
            <Input
              type="number"
              id="capacity"
              placeholder="Capacity"
              {...register('capacity',{ required: true })}
              hasError={errors.capacity}
              errorMsg="Capacity has to be filled up"
            />

        <StyledButton
          size={SIZES.BIG}
          isLoading={loading}
          type="submit"
          color={COLOR.PRIMARY}
        >
          Create new event
        </StyledButton>
      </form>
    </>
  )
}

EventForm.displayName = 'EventForm'