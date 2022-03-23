import {
  ChildGeneration,
} from "../generated/Parent/Parent"
import { ParentEntity, ChildEntity } from "../generated/schema"
import { Initialize } from './../generated/templates/Child/Child';
import { log } from '@graphprotocol/graph-ts';
import {Child} from "./../generated/templates";

export function handleChildGeneration(event: ChildGeneration): void {
  log.info("YAHAN,{}",[""]);
  log.info("here is the parent {}", [""]);
  let entity = ParentEntity.load(event.transaction.hash.toHex())

  if (!entity) {
    entity = new ParentEntity(event.transaction.hash.toHex())
  }
  entity._name = event.params._name;
  entity._parentAddress = event.params._parentAddress
  entity._childNumber = event.params._childNumber
  
  entity.save()
}


export function handleInitialize(event: Initialize): void {
  log.info("YAHAN,{}",[""]);
  log.info("here is the child {}", [""]);
// let entity: ChildEntity = new ChildEntity(event.transaction.hash.toHex());
  let entity  = ChildEntity.load(event.transaction.hash.toHex())
  if (!entity) {
    Child.create(event.params.childAddress);    
    entity = new ChildEntity(event.transaction.hash.toHex())
  }

  // entity._parentAddress = event.params._parentAddress
  // entity._childAddress = event.params.childAddress
  // entity._name = event.params._name
  // entity.save()
}
