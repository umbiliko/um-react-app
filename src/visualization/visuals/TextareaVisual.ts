import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface TextareaProps
  extends StandardVisual<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      TextareaClassKey,
      'rows'
    > {
  defaultValue?: any;
  disabled?: boolean;
  rows?: string | number;
  rowsMax?: string | number;
  textareaRef?: React.Ref<any> | React.RefObject<any>;
  value?: string;
}

export type TextareaClassKey = 'root' | 'shadow' | 'textarea';

declare const Textarea: React.ComponentType<TextareaProps>;

export default Textarea;
