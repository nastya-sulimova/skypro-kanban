import {
  CardLoading,
  SkeletonCard,
  StatusTitle,
  ImitationTopic,
  ImitationTitle,
  ImitationDate,
  ImitationCardEdit, CardLoadingBox
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
        <CardLoadingBox
          key={index}
        >
          <StatusTitle>{title}</StatusTitle>
          <SkeletonCard>
            <ImitationTopic></ImitationTopic>
            <ImitationTitle></ImitationTitle>
            <ImitationDate></ImitationDate>
            <ImitationCardEdit></ImitationCardEdit>
          </SkeletonCard>
        </CardLoadingBox>
      ))}
    </CardLoading>
  );
};

export default CardLoader;
