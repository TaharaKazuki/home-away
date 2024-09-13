'use client';

import { useEffect, type ReactNode } from 'react';
import { useFormState } from 'react-dom';

import { useToast } from '@/hooks/use-toast';
import { actionFunction } from '@/utils/types';

const initialState = {
  message: '',
};

type FormContainerProps = {
  action: actionFunction;
  children: ReactNode;
};

const FormContainer = ({ action, children }: FormContainerProps) => {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state, toast]);

  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
