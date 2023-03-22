import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { Field as FormikField } from 'formik';
import { ErrorMessage as FormikErrorMessage } from 'formik';
//import { BiSearch as ReactIcon } from 'react-icons/bi';

// export const BiSearch = styled(ReactIcon)`
//   display: inline-block;
//   width: 24px;
//   height: 24px;
//   overflow: hidden;
// `;

export const Form = styled(FormikForm)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Field = styled(FormikField)`
  display: block;
  width: 90%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  /* padding-box – указывает, что фон (фоновое изображение) нужно рисовать только до внешнего края отступа (под границей не выводить); */
  border: 1px solid #bdbdbd;
  /* устанавливает границу, у которой: 1px (толщина), solid (тип линии) и #bdbdbd (цвет); */
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
  /* сброс стилей */
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;

  /* переопределение стилей для ссылок */
  display: inline-block;
  text-align: center;
  text-decoration: none;

  /* небольшие вертикальные отступы */
  margin: 2px 0;

  /* невидимая рамка */
  border: solid 1px transparent;
  border-radius: 4px;

  /* для установки размеров используем паддинги */
  padding: 0.5em 1em;

  /* контрастные цвета */
  color: #ffffff;
  background-color: #9555af;

  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }

  &:hover,
  &:focus {
    color: #9555af;
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
