import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import {
  PokemonResponse,
  Result,
} from './interfaces/pokemon-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;
  @InjectModel(Pokemon.name)
  private readonly pokemonModel: Model<Pokemon>;

  async executeSeed(): Promise<string> {
    await this.pokemonModel.deleteMany({});

    const { data } = await this.axios.get<PokemonResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    interface Pokemon {
      name: string;
      no: number;
    }

    const pokemonToInsert: Pokemon[] = data.results.map(
      ({ name, url }: Result): Pokemon => {
        const no = +url.split('/').slice(-2, -1)[0];
        return { name, no };
      },
    );

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed Executed';
  }
}