<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use Carbon\Carbon;

class EventController extends Controller
{
    public function allEvent()
    {
        // GET /api/v1/events -> Return all events from the database
        return Event::all();
    }

    public function activeEvent()
    {
       // GET /api/v1/events/active-events -> Return all events that are active = current datetime is within startAt and endAt
       $activeEvents = Event::where('startAt', '<=', Carbon::now())
       ->where('endAt', '>=', Carbon::now())
       ->get();
        return $activeEvents;
    }

    public function showById(Event $id)
    {
        // GET /api/v1/events/{id} -> Get one event
        return Event::find($id);
    }

    public function storeEvent(Request $request)
    {
        // POST /api/v1/events -> Create an event
        $event = Event::create($request->all());
        return response()->json($event, 201);
    }
    
    public function updateEvent(Request $request, Event $id)
    {
        // PUT /api/v1/events/{id} -> Create event if not exist, else update the event in idempotent way
        // PATCH /api/v1/events/{id} -> Partially update event
        $id->update($request->all());
        return response()->json($id, 200);
    }

    public function deleteEvent(Event $id)
    {
        // DELETE /api/v1/events/{id} -> Soft delete an event
        $id->delete();
        return response()->json(null, 204);
    }
}