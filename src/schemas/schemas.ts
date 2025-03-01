import { z } from 'zod';

export const taskSchema = z.object({
  title: z.string().min(1, 'El título es requerido'),
  hours: z.string()
    .refine(val => !isNaN(Number(val)), 'Debe ser un número válido')
    .refine(val => Number(val) >= 0, 'No puede ser negativo')
    .refine(val => Number(val) <= 24, 'Máximo 24 horas')
    .refine(val => Number.isInteger(Number(val)), 'Debe ser un entero'),
  minutes: z.string()
    .refine(val => !isNaN(Number(val)), 'Debe ser un número válido')
    .refine(val => Number(val) >= 0, 'No puede ser negativo')
    .refine(val => Number(val) <= 59, 'Máximo 59 minutos')
    .refine(val => Number.isInteger(Number(val)), 'Debe ser un entero')
});