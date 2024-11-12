import { Injectable } from '@nestjs/common';
import {
  PokemonResponse,
  Result,
} from './interfaces/pokemon-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed(): Promise<string> {
    await this.pokemonModel.deleteMany({});

    const data: PokemonResponse = await this.http.get<PokemonResponse>(
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