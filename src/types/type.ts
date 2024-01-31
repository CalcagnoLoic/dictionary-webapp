export type Definition = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example: string;
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
};

export type Phonetic = {
  audio: string
}