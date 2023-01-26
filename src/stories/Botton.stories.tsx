import React from 'react';
import Button from '../components/Button/Button';

export default {
  title: 'Button',
  component: Button,
};

export const MiddleRed = () => <Button content="Middle Red" type="button" btn="btn btn-red btn-middle" />;
export const OutlinedMiddle = () => <Button content="Outlined Middle" type="button" btn="btn bnt-outlined btn-middle" />;
