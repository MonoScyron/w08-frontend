export interface Facility {
    id: Number;
    available_PE: Number;
    available_rabbits: Number;
    day: Number;
    shift: Number;
    alert_level: Number;
}

export interface Tile {
    abnormalities: Abnormality[];
    agents: Agent[];
    x: Number;
    y: Number;
    can_place_containment: boolean;
    is_containment_unit: boolean;
    is_working: boolean;
    meltdown: boolean;
    work_type: string;
    engagement_status: string;
}

export interface Department {
    id: Number;
    agents: Agent[];
    projects: Project[];
    name: string;
    buffs: string[],
    rabbited: boolean;
}

export interface Abnormality {
    id: Number;
    tile_id: Number;
    tile: Tile;
    clocks: Clock[];
    agents: Agent[];
    egos: Ego[];
    name: string;
    abno_code: string;
    blurb: string;
    current_status: string;
    threat_level: string;
    is_breaching: boolean;
    is_working: boolean;
    description: string;
    damage_type: string;
    favored_work: string;
    disfavored_work: string;
    can_breach: boolean;
    weaknesses: string;
    resists: string;
    management_show: Number;
    management_notes: string[];
    story_show: Number;
    stories: string[];
    clock_1: Number;
    clock_2: Number;
    clock_3: Number;
    clock_4: Number;
    clock_4_finished: boolean;
    player_notes: string[];
}

export interface Agent {
    id: Number;
    tile_id: Number;
    tile: Tile;
    department_id: Number;
    department: Department;
    abnormality_id: Number;
    abnormality: Abnormality;
    egos: Number;
    abilities: Number;
    clocks: Number;
    harms: Number;
    name: Number;
    blurb: Number;
    current_status: Number;
    uncontrollable: Number;
    character_notes: Number;
    rank: Number;
    physical_heal: Number;
    mental_heal: Number;
    stress: Number;
    traumas: Number;
    is_visible: Number;
    agent_exp: Number;
    fortitude: Number;
    prudence: Number;
    temperance: Number;
    justice: Number;
    fortitude_tick: Number;
    prudence_tick: Number;
    temperance_tick: Number;
    justice_tick: Number;
    ability_tick: Number;
    force_lvl: Number;
    endure_lvl: Number;
    lurk_lvl: Number;
    rush_lvl: Number;
    observe_lvl: Number;
    consort_lvl: Number;
    shoot_lvl: Number;
    protocol_lvl: Number;
    discipline_lvl: Number;
    skirmish_lvl: Number;
}

export interface Project {
    id: Number;
    department_id: Number;
    department: Department;
    name: string;
    description: string;
    max_clock: Number;
    curr_tick: Number;
}

export interface Ability {
    id: Number;
    agents: Agent[];
    name: string;
    description: string;
    rank: string;
}

export interface Harm {
    id: Number;
    agent_id: Number;
    agent: Agent;
    level: Number;
    is_physical: boolean;
    description: string;
}

export interface Ego {
    id: Number;
    agents: Agent[];
    abnormality_id: Number;
    abnormality: Abnormality;
    type: string;
    name: string;
    grade: string;
    effect: string;
    description: string;
    max_extracted: Number;
}

export interface Clock {
    agents: Agent[];
    abnormalities: Abnormality[];
    name: string;
    description: string;
    max_count: Number;
    tick_count: Number;
    important: boolean;
}