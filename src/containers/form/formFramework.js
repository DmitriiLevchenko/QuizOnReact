export function createControl(config, validation) {
    return {
      ...config,
      value: '',
      validation,
      valid: !validation,
      touched: false,
      
    }
  }
  
  export function validate(value, validation = null) {
    if (!validation) {
      return true
    }
  
    let isValid = true
  
    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }
  
    return isValid
  }
  
  export function validateForm(formControls) {
    let isFormValid = true
  
    for (let control in formControls) {
      if (formControls.hasOwnProperty(control)) {
        isFormValid = formControls[control].valid && isFormValid
      }
    }
  
    return isFormValid
  }