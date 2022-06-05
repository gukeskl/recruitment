import axios from 'axios';
import { Breed, DogImageUrl, SubBreed } from 'types';

export enum REQUEST_STATUS {
  SUCCESS = 'success',
}

type BreedApiResponse<T> = {
  message: T;
  status: `${REQUEST_STATUS}`;
};

type GetBreedsResponse = BreedApiResponse<{
  [breed: Breed]: SubBreed[];
}>;

const getBreedsList = async (): Promise<Breed[]> => {
  const { data } = await axios.get<GetBreedsResponse>('https://dog.ceo/api/breeds/list/all');
  return Object.keys(data.message);
};

type GetDogsImagesResponse = BreedApiResponse<DogImageUrl[]>;

const getDogsImages = async (breed: Breed): Promise<DogImageUrl[]> => {
  const { data } = await axios.get<GetDogsImagesResponse>(`https://dog.ceo/api/breed/${breed}/images`);
  return data.message;
};

type GetRandomDogImageResponse = BreedApiResponse<DogImageUrl>;

const getRandomDogImage = async (breed: Breed): Promise<DogImageUrl> => {
  const { data } = await axios.get<GetRandomDogImageResponse>(`https://dog.ceo/api/breed/${breed}/images/random`);
  return data.message;
};

export default {
  getBreedsList,
  getDogsImages,
  getRandomDogImage,
};
