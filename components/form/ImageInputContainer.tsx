'use client';

import Image from 'next/image';
import { useState, type ReactNode } from 'react';
import { LuUser2 } from 'react-icons/lu';

import { SubmitButton } from './Button';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';
import { Button } from '@/components/ui/button';
import { actionFunction } from '@/utils/types';

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: ReactNode;
};

const ImageInputContainer = ({
  image,
  name,
  action,
  text,
  children,
}: ImageInputContainerProps) => {
  const [isUpdateFormVisible, setUpdateFormVisible] = useState<boolean>(false);

  const userIcon = (
    <LuUser2 className="mb-4 size-24 rounded bg-primary text-white" />
  );
  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="mb-4 size-24 rounded object-cover"
        />
      ) : (
        userIcon
      )}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="mt-4 max-w-lg">
          <FormContainer action={action}>
            {children}
            <ImageInput />
            <SubmitButton size="sm" />
          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default ImageInputContainer;
