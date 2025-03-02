// TaskForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema } from '../schemas/schemas';
import { useChecklistStore } from '../store/store';
import { Clock, Plus } from 'lucide-react';
import { z } from 'zod';

type TaskFormData = z.infer<typeof taskSchema>;

const TaskForm = () => {
  const { 
    register, 
    handleSubmit,
    formState: { errors },
    reset 
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: '',
      hours: '',
      minutes: ''
    },
    mode: 'onSubmit'
  });

  const { addTask } = useChecklistStore();

  const onSubmit = (data: TaskFormData) => {
    console.log(data);
    addTask({
      title: data.title,
      hours: Number(data.hours),
      minutes: Number(data.minutes),
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#333131] p-4 rounded-lg space-y-4 h-fit">
      <h2 className="text-lg">Agregar tarea para hoy</h2>
      
      {/* Campo de título */}
      <div>
      <label className="block text-sm font-medium mb-1">Título</label>
        <input
          {...register('title')}
          placeholder="Nombre de la tarea"
          className=" p-2 rounded w-full outline-none border-b border-[#9AD09B] text-white"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>

      {/* Campos de tiempo */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Horas</label>
          <div className="flex items-center gap-2  p-2 rounded">
            <Clock color='#9AD09B' size={16} />
            <input
              type="number"
              {...register('hours')}
              placeholder="0"
              className="w-16 outline-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          {errors.hours && <p className="text-red-500 text-sm mt-1">{errors.hours.message}</p>}
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Minutos</label>
          <div className="flex items-center gap-2 p-2 rounded">
            <Clock color='#9AD09B' size={16} />
            <input
              type="number"
              {...register('minutes')}
              placeholder="0"
              className="w-16 outline-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          {errors.minutes && <p className="text-red-500 text-sm mt-1">{errors.minutes.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer flex items-center gap-2 justify-center font-medium opacity-100 bg-[#9AD09B] text-black px-4 py-2 rounded transition"
      >
        <Plus size={20} />
       <p className=''>Agregar Tarea</p>
      </button>
    </form>
  );
};

export default TaskForm;