import React from "react";
import PrimaryButton from "./components/atoms/PrimaryButton";
import SecondaryButton from "./components/atoms/SecondaryButton";
import CardPosts from "./components/CardPosts";

const Scratch = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <PrimaryButton>yow</PrimaryButton>
      <SecondaryButton>Sample Button</SecondaryButton>
      <CardPosts
        agreeCount={580}
        disagreeCount={420}
        title={"Proposal for construction of more public library"}
        name={"Arianne Rey"}
        date={"December 10, 2021"}
        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..."}
        starCount={21}
        topic={"news"}
      />
      <CardPosts
        agreeCount={580}
        disagreeCount={420}
        title={"Proposal for construction of more public library"}
        name={"Arianne Rey"}
        date={"December 10, 2021"}
        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..."}
        starCount={21}
        topic={"concern"}
      />
    </div>

  );
};

export default Scratch;
