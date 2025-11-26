<?php

namespace Database\Factories;

use App\Models\Group;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Message>
 */
class MessageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $senderId = $this->faker->numberBetween(0,1);// без масиви
        if ($senderId === 0) {
            $senderId = $this->faker->randomElement(User::where('id','!=',1)
                ->pluck('id')->toArray());
            $recieverId = 1;
        }
        else{
            $recieverId = $this->faker->randomElement(User::pluck('id')->toArray());
        }
        $groupId = null;
        if ($this->faker->boolean(50)) {
            $groupId = $this->faker->randomElement(Group::pluck('id')->toArray());
            //dump("groupID->".$groupId."; ");
            $group = Group::find($groupId);
            //dump("group->".$group."; ");
            $senderId = $this->faker->randomElement($group->users->pluck('id')->toArray());
            dump("senderId->".$senderId.";");

            $recieverId=null;
        }
        return [
            'sender_id'=>$senderId,
            'receiver_id'=>$recieverId,
            'group_id'=>$groupId,
            'message'=>$this->faker->realText(200),
            'created_at'=>$this->faker->dateTimeBetween('-1 years', 'now'),
        ];
    }
}
