"use client";

import ButtonType1 from "./customs/buttontype1";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type Props = ComponentProps<typeof ButtonType1> & {
  pendingText?: string;
};

export function SubmitButton({
  children,
  pendingText = "Submitting...",
  ...props
}: Props) {
  const { pending } = useFormStatus();

  return (
    <ButtonType1 type="submit" aria-disabled={pending} {...props}>
      {pending ? pendingText : children}
    </ButtonType1>
  );
}
