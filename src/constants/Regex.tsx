export const reg = /^([a-z0-9]+)([\.{1}])?([a-z0-9]+)\@(([a-z0-9-])+\.)+([a-z0-9]{2,4})/g
export const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/