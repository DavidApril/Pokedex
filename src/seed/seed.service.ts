import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokemonResponse } from './interfaces/pokemon-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;
  @InjectModel(Pokemon.name)
  private readonly pokemonModel: Model<Pokemon>;

  async executeSeed(): Promise<string> {
    const { data } = await this.axios.get<PokemonResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    for (const { name, url } of data.results) {
      const segments: string[] = url.split('/');
      const no: number = +segments[segments.length - 2];
      await this.pokemonModel.create({ name, no });
    }
    return 'Seed Executed';
  }
}