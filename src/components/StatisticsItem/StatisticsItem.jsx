import style from './StatisticsItem.module.css';

const StatisticsItem = ({ icon: Icon, title, total }) => {
  return (
    <>
      <Icon size="32px" />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
