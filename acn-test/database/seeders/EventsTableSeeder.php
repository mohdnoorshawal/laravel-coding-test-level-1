<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Event;

class EventsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Event::truncate();
        $events = [
        [
            'id' => '1',
            'name' => 'YEC',
            'slug' => 'Year End Campaign',
            'startAt' => '2022-12-01',
            'endAt' => '2022-12-31',
        ],
        [
            'id' => '2',
            'name' => 'CNY',
            'slug' => 'Chinese New Year',
            'startAt' => '2023-01-01',
            'endAt' => '2023-01-31',
        ],
        [
            'id' => '3',
            'name' => 'YLC',
            'slug' => 'Year Long Campaign',
            'startAt' => '2022-01-01',
            'endAt' => '2022-12-31',
        ],
        [
            'id' => '4',
            'name' => 'Deepavali',
            'slug' => 'Deepavali',
            'startAt' => '2022-10-01',
            'endAt' => '2022-10-31',
        ],
        [
            'id' => '5',
            'name' => 'RAYA',
            'slug' => 'Hari Raya Campaign',
            'startAt' => '2023-04-01',
            'endAt' => '2023-05-31',
        ]];
        Event::insert($events);
        

    }
}
