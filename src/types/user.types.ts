export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
  otp?: string;
}

export interface UserCreationAttributes {
  name: string;
  email: string;
  password: string;
  role: string;
  isActive?: boolean;
  otp?: string;
}