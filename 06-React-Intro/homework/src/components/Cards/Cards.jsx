import React from 'react';
import Card from '../Card/Card.jsx';
import { Div, Divv } from './cardsStyle'

export default function Cards(props) {
    // acá va tu código
    // tip, podés usar un map
    return <Divv> {
            props.cities?.map(city => ( <Div><
                    Card max = { city.main.temp_max }
                    min = { city.main.temp_min }
                    name = { city.name }
                    img = { city.weather[0].icon }
                    onClose = {
                        () => alert(city.name)
                    }
                    key = { city.id }
                    /></Div>))
                } 
                </Divv>
            };

            /* export default class Cards extends React.Component{
                render(){
                  return <div> {
                              this.props.cities?.map(city =>( 
                              < Card 
                              max = { city.main.temp_max }
                              min = { city.main.temp_min }
                              name = { city.name }
                              img = { city.weather[0].icon }
                              onClose = {
                                    () => alert(city.name)
                              }
                              key = {city.id}
                              />))
                              } 
                        </div>
                          }
            } */