import React from 'react';

import {
  StCoreValueInputContainer,
  StMainTitleContainer,
  StSubTitleContainer,
  StTextFieldContainer,
  StTitleContainer,
  StTypography,
} from '@/components/orgAdmin/AboutTab/AboutTabManagement/CoreValueInput/style';
import ImageSelect from '@/components/orgAdmin/ImageSelect';
import TextField from '@/components/orgAdmin/TextField';
import TextFieldV2 from '@/components/orgAdmin/TextFieldV2';
import { register } from 'tsconfig-paths';
import { useForm } from 'react-hook-form';

interface Props {
  image: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  subTitle: string;
  onHandleTitleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onHandleSubTitleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onRemoveImage: () => void;
  index: number;
}
function CoreValueInput({
  title,
  subTitle,
  onHandleSubTitleChange,
  onHandleTitleChange,
  image,
  onChange,
  onRemoveImage,
  index,
}: Props) {
  const { register } = useForm();
  return (
    <StCoreValueInputContainer>
      <p>image (380 * 380)</p>
      <div className={'core_value_container'}>
        <div className={'core_value_logo_container'}>
          <ImageSelect
            image={image}
            onChange={onChange}
            onRemoveImage={onRemoveImage}
            width={380}
            height={380}
          />
        </div>
        <StTitleContainer>
          <StMainTitleContainer>
            <StTypography>Title</StTypography>
            <StTextFieldContainer>
              <TextFieldV2
                label={'ex.connection'}
                {...register(`coreValue.${index}.title`, { required: true })}
                multiline={false}
              />
            </StTextFieldContainer>
          </StMainTitleContainer>
          <StSubTitleContainer>
            <StTypography>Sub Title</StTypography>
            <StTextFieldContainer>
              <TextFieldV2
                label={
                  'ex. 이해를 바탕으로 사람들과 소통하여 연결될 수 있는 사람'
                }
                {...register(`coreValue.${index}.subTitle`, { required: true })}
                multiline
                height={'120px'}
              />
            </StTextFieldContainer>
          </StSubTitleContainer>
        </StTitleContainer>
      </div>
    </StCoreValueInputContainer>
  );
}

export default CoreValueInput;
