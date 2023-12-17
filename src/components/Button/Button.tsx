import BaseButton, { BaseButtonProps } from './bases/BaseButton';
import ExpandableButton, {
  ExpandableButtonProps,
} from './variants/ExpandableNavButton';
import TextButton, { TextButtonProps } from './variants/TextButton';

type ButtonVariants =
  | ({ variant: 'text' } & TextButtonProps)
  | ({ variant: 'expandable' } & ExpandableButtonProps)
  | ({ variant: undefined | 'base-button' } & BaseButtonProps);

const Button: React.FC<ButtonVariants> = ({ variant, ...props }) => {
  switch (variant) {
    case 'text':
      return <TextButton {...(props as TextButtonProps)} />;
    case 'expandable':
      return <ExpandableButton {...(props as ExpandableButtonProps)} />;
    default:
      return <BaseButton {...props} />;
  }
};

export { Button };
