import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Title, Subtitle } from '../../ui-kit/components/Typography'
import { Input } from '../../ui-kit/components/Input'
import { format } from 'date-fns'
import { StyledButton } from './styled'
import { EventData } from '../../store/user/type'
import { COLOR, SIZES } from '../../enums/constants'

interface props {
  onSubmit: (eventData: EventData) => void
}

/**
 * Form for creating new and editing event
 * TODO: add default values to useForm to enable editing form
 */
export const EventForm: FC<props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [loading, setLoading] = useState(false)

  const getTodayDate = format(new Date(), 'yyyy-MM-dd')

  const handleFormSubmit = async (data: EventData) => {
    setLoading(true)
    onSubmit(data)
    setLoading(false)
  }

  return (
    <>
      <Title>Create new event</Title>
      <Subtitle>Enter details below.</Subtitle>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          type="text"
          id="name"
          placeholder="Title"
          {...register('title', { required: true })}
          hasError={errors.title}
          errorMsg="Title has to be filled up"
        />

        <Input
          type="text"
          id="desc"
          placeholder="Description"
          {...register('description', { required: true })}
          hasError={errors.description}
          errorMsg="Description has to be filled up"
        />

        <Input
          type="date"
          id="date"
          min={getTodayDate}
          placeholder="Date"
          {...register('date', { required: true })}
          hasError={errors.date}
          errorMsg="Date has to be filled up"
        />

        <Input
          type="time"
          id="time"
          placeholder="Time"
          {...register('time', { required: true })}
          hasError={errors.time}
          errorMsg="Time has to be filled up"
        />

        <Input
          type="number"
          id="capacity"
          placeholder="Capacity"
          min={1}
          {...register('capacity', { required: true })}
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
