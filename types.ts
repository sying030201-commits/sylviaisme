export type Stage = 'THEN' | 'NOW' | 'FUTURE';

export interface EvolutionStage {
  id: Stage;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  tags: string[];
}

export interface WorkCase {
  id: string;
  title: string;
  subtitle: string;
  then: {
    time: string;
    location: string;
    scenario: string;
    workflow: string[];
    timeCost: string;
    painPoints: string[];
    insight: string;
  };
  now: {
    time: string;
    logic: string;
    workflow: string[];
    architecture: {
      input: string[];
      process: string[];
      output: string[];
    };
    innovations: {
      title: string;
      content: string;
    }[];
    efficiency: {
      then: string;
      now: string;
      multiplier: string;
    };
    tools: string[];
    insight: string;
  };
}
