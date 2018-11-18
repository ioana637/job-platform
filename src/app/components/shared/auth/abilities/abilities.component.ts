import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {AbilityService} from '../../../../services/ability.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {
  selectedAbility;
  abilities;
  selectedLevel;
  levels;
  filteredAbilities;
  filteredLevels;

  constructor(private abilityService: AbilityService) {
  }

  ngOnInit() {
  }

  getAbility() {
    return {ability: this.selectedAbility, level: this.selectedLevel};
  }

  filterAbilities(event) {
    const query = event.query;
    this.abilityService.fetch().subscribe(abilities => {
      this.filteredAbilities = this.filter(query, abilities, 'display');
    });
  }

  filterLevel(event) {
    const query = event.query;
    this.abilityService.fetchLevels().subscribe(levels => {
      this.filteredLevels = this.filter(query, levels, 'display');
    });
  }

  filter(query, entities, prop) {
    let filtered = [];
    entities.forEach(entity => {
        if (entity[prop].toLowerCase().indexOf(query.toLowerCase()) === 0) {
          filtered.push(entity);
        }
      }
    );
    return filtered;
  }
}
