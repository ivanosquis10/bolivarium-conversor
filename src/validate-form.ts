export const validateName = { required: 'Name is required', minLength: { value: 3, message: 'Must have at least 3 characters' } }
export const validateMessage = { required: 'Message is required', minLength: { value: 10, message: 'Must have at least 20 characters' } }

export const validateEmail = {
  required: 'Email is required',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email address'
  }
}
