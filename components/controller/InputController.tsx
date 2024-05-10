import React, { ReactNode } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Control, FieldPath, FieldValues, UseFormReset } from "react-hook-form";
import { InputType } from "./type";

interface InputControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  control: Control<TFieldValues>;
  name: TName;
  type?: InputType;
  placeholder?: string;
  label: string | ReactNode;
}

export const InputController = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: InputControllerProps<TFieldValues, TName>
): JSX.Element => {
  const {
    control,
    label,
    name,
    placeholder = "Enter something...",
    type = "text",
  } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                type={type}
                placeholder={placeholder}
                className="input-class"
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </FormItem>
      )}
    />
  );
};
