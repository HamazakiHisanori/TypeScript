export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickpractice1 = () => {
    calcTotalFee(1000);
  };

  return (
    <div>
      <p>練習問題：引数の形指定</p>
      <button onClick={onClickpractice1}>練習問題1を実行</button>
    </div>
  );
};
