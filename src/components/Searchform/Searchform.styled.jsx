import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { Field as FormikField } from 'formik';
import { ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Field = styled(FormikField)`
  display: block;
  width: 99%;
  /* height: calc(2.25rem + 2px); */
  padding: 0.5rem 0.5rem;
  font-family: inherit;
  font-size: inherit;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;

  border: 1px solid #bdbdbd;

  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &::placeholder {
    color: #212529;
    opacity: 0.4;
  }
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  position: absolute;
  font-size: 1rem;
  color: red;
  padding-left: 5px;
`;

export const ButtonForm = styled.button`
  font: inherit;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin: 2px 0;
  border: solid 1px transparent;
  border-radius: 4px;
  padding: 0.6rem 1.5rem;
  color: #ffffff;
  background-color: #0a64a0;

  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }

  &:hover,
  &:focus {
    color: #0a64a0;
    border-color: currentColor;
    background-color: white;
  }
`;

export const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
