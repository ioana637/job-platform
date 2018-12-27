import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {AbilityService} from '../../../services/ability.service';
import {Ability, Level} from '../model';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AbilityComponent implements OnInit {
  @Input() number;
  @Output() deleted = new EventEmitter();
  selectedAbility: Ability;
  selectedLevel: Level;
  filteredAbilities: Ability[];
  filteredLevels: Level[];

  constructor(private abilityService: AbilityService) {
  }

  ngOnInit() {
  }

  getAbility() {
    if (this.selectedLevel && this.selectedAbility) {
      if (this.selectedAbility instanceof Object) {
        const {id, code, display} = this.selectedAbility;
        return {id, code, display, level: this.selectedLevel.levelName.toUpperCase()};
      } else {
        return {display: this.selectedAbility, code: this.selectedAbility, level: this.selectedLevel.levelName.toUpperCase()};
      }
    } else {
      return null;
    }

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
      this.filteredLevels = this.filter(query, levels, 'levelName');
    });
  }

  filter(query, entities, prop) {
    let filtered = [];
    entities.forEach(entity => {
        if (entity[prop] && entity[prop].toLowerCase().indexOf(query.toLowerCase()) === 0) {
          filtered.push(entity);
        }
      }
    );
    return filtered;
  }

  delete() {
    this.deleted.emit(true);
  }
}
