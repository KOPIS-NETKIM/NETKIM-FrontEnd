import { InputReducder } from '@/store/editReducer';

const InputBox = (
  props: InputReducder & { on: boolean; setOn: React.Dispatch<React.SetStateAction<boolean>> }
) => {
  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.dispatch({ type: 'CHANGE', payload: e.target.value });
  };
  return (
    <input
      placeholder="닉네임을 입력해주세요"
      className="font-Neo text-left h-10 w-[435px]"
      disabled={props.on}
      maxLength={15}
      onChange={onChangeData}
      value={props.state}
    />
  );
};

export default InputBox;
