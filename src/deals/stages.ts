export const stages = [
  "opportunity",
  "proposal-sent",
  "in-negociation",
  "won",
  "lost",
  "delayed",
];

export const stageNames = {
  opportunity: "Opportunity",
  "proposal-sent": "Proposed",
  "in-negociation": "In Negoiation",
  won: "Won",
  lost: "Lost",
  delayed: "Delayed",
};

export const stageChoices = stages.map((type) => ({
  id: type,
  /* @ts-ignore */
  name: stageNames[type],
}));
