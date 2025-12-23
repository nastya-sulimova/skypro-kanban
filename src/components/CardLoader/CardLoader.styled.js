import styled from "styled-components";

export const CardLoading = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const CardLoadingProcess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(148, 166, 190, 1);
  font-size: 14px;
  font-weight: 400;
`;

export const SkeletonCard = styled.div`
  width: 220px;
  height: 130px;
  background: white;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 25px 25px 25px 25px;
  gap: 10px;
  align-items: center;
`;

export const CardLoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StatusTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
  color: #94a6be;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  text-align: left;
`;

export const ImitationTopic = styled.div`
  background: linear-gradient(
    to right,
    rgba(193, 205, 220, 1),
    rgba(233, 238, 247, 1)
  );
  width: 80px;
  height: 20px;
  border-radius: 15px;

  grid-column-start: 1;
  grid-row-start: 1;
`;

export const ImitationTitle = styled.div`
  background: linear-gradient(
    to right,
    rgba(193, 205, 220, 1),
    rgba(233, 238, 247, 1)
  );
  width: 120px;
  height: 15px;

  grid-column-start: 1;
  grid-row-start: 2;
`;

export const ImitationDate = styled.div`
  background: linear-gradient(
    to right,
    rgba(193, 205, 220, 1),
    rgba(233, 238, 247, 1)
  );
  width: 60px;
  height: 15px;

  grid-column-start: 1;
  grid-row-start: 4;
`;

export const ImitationCardEdit = styled.div`
  background: linear-gradient(
    to right,
    rgba(193, 205, 220, 1),
    rgba(233, 238, 247, 1)
  );
  width: 25px;
  height: 5px;

  grid-column-start: 2;
  grid-row-start: 1;
  justify-self: end;
`;
