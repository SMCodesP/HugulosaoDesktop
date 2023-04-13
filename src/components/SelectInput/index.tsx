import { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import Creatable, {
  useCreatable,
} from 'react-select/creatable';

import { GroupInput, LabelInput } from './styles';
import { GroupBase, OptionsOrGroups } from 'react-select';
import { useTheme } from 'styled-components';

interface TSelectInput {
  name: string;
  options?: OptionsOrGroups<unknown, GroupBase<unknown>>;
  label?: string;
}

const SelectInput: React.FC<TSelectInput> = ({
  name,
  label,
  options,
  ...rest
}) => {
  const inputRef = useRef<any | null>(null);
  const { fieldName, defaultValue, registerField, error } =
    useField(name);
  const theme = useTheme();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        console.log(ref.state);
        return `ref.state.value`;
      },
      setValue: (ref, value) => {
        ref.select.setValue(value || null);
      },
      clearValue: (ref) => {
        ref.current.value = ``;
      },
    });
  }, [fieldName, registerField]);

  return (
    <GroupInput>
      {label && (
        <LabelInput htmlFor={name}>{label}</LabelInput>
      )}
      <div>
        <Creatable
          ref={inputRef as any}
          id={name}
          placeholder="Selecione uma categoria"
          options={options}
          defaultValue={defaultValue}
          theme={(selectTheme) => ({
            ...selectTheme,
            borderRadius: 8,
            colors: {
              ...selectTheme.colors,
              neutral0: theme.background,
              primary: theme.pink,
              neutral80: theme.pink,
              neutral30: theme.currentLine,
              neutral20: theme.comment,
              primary25: theme.purple,
              primary50: theme.comment,
            },
          })}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              transition: `border-color .4s`,
              boxShadow: `0 0 8px ${theme.purple}33`,
              borderWidth: 2,
              filter: `brightness(75%)`,
            }),
          }}
          {...rest}
        />
      </div>
    </GroupInput>
  );
};

export default SelectInput;
