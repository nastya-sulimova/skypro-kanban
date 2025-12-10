import {
  CardLoading,
  SkeletonCard,
  StatusTitle,
  ImitationTopic,
  ImitationTitle,
  ImitationDate,
  ImitationCardEdit,
} from "./CardLoader.styled";

const CardLoader = () => {
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <CardLoading>
      {statuses.map((title, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <StatusTitle>{title}</StatusTitle>
          <SkeletonCard>
            <ImitationTopic></ImitationTopic>
            <ImitationTitle></ImitationTitle>
            <ImitationDate></ImitationDate>
            <ImitationCardEdit></ImitationCardEdit>
          </SkeletonCard>
        </div>
      ))}
    </CardLoading>
  );
};

export default CardLoader;
